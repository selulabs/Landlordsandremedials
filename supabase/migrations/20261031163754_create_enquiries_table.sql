/*
# Create enquiries table

1. New Tables
- `enquiries`: booking and contact requests submitted from the website.
  - `id` (uuid, primary key)
  - `name`, `email`, `phone` (contact details)
  - `service` (the compliance service requested)
  - `postcode` (property location, optional)
  - `preferred_date` (optional requested inspection date)
  - `message` (optional free-text note)
  - `created_at` (timestamp)

2. Security
- Row level security enabled on `enquiries`.
- Visitors (anon role) may only INSERT new enquiries. They cannot read, update or delete any submissions.
- Submissions are readable only through the project dashboard, which uses privileged access.

3. Notes
- Length and format checks protect against oversized or empty submissions.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254 AND email LIKE '%_@_%'),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 5 AND 30),
  service text NOT NULL CHECK (char_length(service) BETWEEN 1 AND 120),
  postcode text CHECK (postcode IS NULL OR char_length(postcode) <= 12),
  preferred_date date,
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
