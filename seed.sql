-- Given the following prisma model, generate SQL statement to insert 20 records in the Issue table. Use real-world titles and descriptions for issues. Status can be OPEN, IN_PROGRESS, or CLOSED. Descriptions should be one paragraph long. Provide different values for createdAt and updatedAt columns. Assume the underlying database is a MySQL database.

-- model Issue {
  -- id          Int      @id @default(autoincrement())
  -- title       String   @db.VarChar(255)
  -- description String   @db.Text
  -- status      Status   @default(OPEN)
  -- createdAt   DateTime @default(now())
  -- updatedAt   DateTime @updatedAt
-- }

-- update Issue set userId="cmkkuwbc30002hllk8ew4h312" where id in (1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64);

-- update Issue set userId="cmkkuz7zj0004hllkht12abiq" where id in (2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65);

-- update Issue set userId="cmkktzo790000hllkqlu1iusc" where id in (3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63);

INSERT INTO Issue (title, description, status, createdAt, updatedAt) VALUES
('Login fails on slow networks',
 'Users on slower or unstable connections report that login requests sometimes fail without a clear error message. Network retries appear to be missing, which causes the authentication request to time out before completion and leaves users uncertain whether their credentials were processed.',
 'OPEN', '2025-01-01 08:15:00', '2025-01-01 08:15:00'),

('Password reset link expires too quickly',
 'Password reset links are expiring sooner than expected, often before users have a chance to open them. This creates frustration and increases support requests, especially for users in different time zones or those checking email infrequently.',
 'IN_PROGRESS', '2025-01-01 09:40:00', '2025-01-03 11:20:00'),

('UI flickers during page transitions',
 'Several users report noticeable flickering when navigating between pages, particularly on lower-end devices. This issue appears related to unnecessary component re-renders that occur during route changes.',
 'OPEN', '2025-01-01 10:05:00', '2025-01-01 10:05:00'),

('Incorrect error shown on failed payment',
 'When a payment fails due to insufficient funds, the system sometimes displays a generic server error instead of a helpful message. This makes it difficult for users to understand why the transaction did not complete.',
 'IN_PROGRESS', '2025-01-02 09:10:00', '2025-01-04 14:30:00'),

('Broken image on marketing homepage',
 'A hero image on the marketing homepage fails to load in some regions due to an incorrect CDN reference. This negatively impacts first impressions for new visitors.',
 'CLOSED', '2024-12-20 11:00:00', '2024-12-22 16:45:00'),

('Search autocomplete suggestions outdated',
 'Autocomplete suggestions in the search bar sometimes include outdated or deleted items. This suggests the suggestion index is not being refreshed as frequently as intended.',
 'OPEN', '2025-01-02 14:20:00', '2025-01-02 14:20:00'),

('User session not invalidated after logout',
 'After logging out, some users are still able to access authenticated pages by navigating back in their browser. This indicates that session invalidation is not consistently enforced.',
 'IN_PROGRESS', '2025-01-02 16:35:00', '2025-01-05 10:10:00'),

('CSV export trims leading zeros',
 'Exported CSV files remove leading zeros from certain fields such as account numbers. This causes data integrity issues when files are opened in spreadsheet applications.',
 'OPEN', '2025-01-03 08:00:00', '2025-01-03 08:00:00'),

('Notification badge count incorrect',
 'The notification badge sometimes displays a higher count than the actual number of unread notifications. This discrepancy persists until the page is refreshed.',
 'IN_PROGRESS', '2025-01-03 09:45:00', '2025-01-06 12:00:00'),

('Form submit button remains disabled',
 'In some forms, the submit button remains disabled even after all required fields are filled correctly. This behavior appears to be caused by stale validation state.',
 'OPEN', '2025-01-03 11:10:00', '2025-01-03 11:10:00'),

('Timezone offset applied incorrectly',
 'Certain date fields display incorrect times due to an extra timezone offset being applied. This is most noticeable for users outside the default server timezone.',
 'IN_PROGRESS', '2025-01-04 08:30:00', '2025-01-06 15:40:00'),

('Slow response from analytics endpoint',
 'Requests to the analytics endpoint occasionally take several seconds to respond. Initial profiling suggests inefficient database queries under high load.',
 'OPEN', '2025-01-04 10:00:00', '2025-01-04 10:00:00'),

('Profile updates not reflected immediately',
 'After saving profile changes, users sometimes still see old information until they refresh the page. This suggests cached data is not being invalidated properly.',
 'IN_PROGRESS', '2025-01-04 13:25:00', '2025-01-05 17:10:00'),

('Mobile navigation menu overlaps content',
 'On smaller screens, the mobile navigation menu overlaps page content instead of pushing it down. This makes certain links difficult to access.',
 'OPEN', '2025-01-04 15:50:00', '2025-01-04 15:50:00'),

('Unclear validation message for email field',
 'When entering an invalid email address, the error message does not clearly explain the required format. Improving this would reduce user confusion.',
 'CLOSED', '2024-12-18 09:10:00', '2024-12-19 14:00:00'),

('Audit log missing delete actions',
 'Delete operations are not consistently recorded in the audit log. This creates gaps in activity tracking and complicates compliance reviews.',
 'IN_PROGRESS', '2025-01-05 08:45:00', '2025-01-07 09:30:00'),

('Bulk upload fails without summary',
 'When a bulk upload partially fails, users are not shown a summary of which records succeeded or failed. This makes troubleshooting difficult.',
 'OPEN', '2025-01-05 10:20:00', '2025-01-05 10:20:00'),

('Email notification sent twice',
 'Some users receive duplicate email notifications for a single event. Logs indicate that retry logic may be triggering multiple sends.',
 'IN_PROGRESS', '2025-01-05 12:40:00', '2025-01-06 18:15:00'),

('Incorrect total shown in invoice',
 'Invoice totals occasionally do not match the sum of individual line items due to rounding errors. This can lead to billing disputes.',
 'OPEN', '2025-01-05 14:55:00', '2025-01-05 14:55:00'),

('Help link opens wrong article',
 'An in-app help link directs users to an unrelated support article. This appears to be caused by an outdated article ID reference.',
 'CLOSED', '2024-12-10 11:30:00', '2024-12-11 09:20:00'),

-- 40 more records follow same structure
('Rate limit error not documented',
 'API consumers encounter rate limit errors without clear documentation on limits or reset windows. This leads to confusion during integration.',
 'OPEN', '2025-01-06 09:00:00', '2025-01-06 09:00:00'),

('Admin role permissions incomplete',
 'Users assigned the admin role still lack access to certain management screens. Permission mappings may be incomplete or misconfigured.',
 'IN_PROGRESS', '2025-01-06 10:40:00', '2025-01-07 13:20:00'),

('Stale cache after deployment',
 'After deploying new versions, some users continue to see outdated content. Cache invalidation appears inconsistent across regions.',
 'OPEN', '2025-01-06 12:15:00', '2025-01-06 12:15:00'),

('File download progress inaccurate',
 'The progress indicator for file downloads jumps erratically and does not reflect actual progress. This creates uncertainty during large downloads.',
 'IN_PROGRESS', '2025-01-06 14:00:00', '2025-01-07 16:45:00'),

('Footer copyright year outdated',
 'The footer still displays last year’s copyright date, which gives the impression that the site is not actively maintained.',
 'CLOSED', '2024-12-31 09:00:00', '2025-01-01 10:00:00'),

 (
  'Login page fails on Safari',
  'Users report that the login page intermittently fails to submit credentials when accessed via Safari on macOS. The issue appears related to cookie handling during the authentication redirect, causing the session token not to persist. This has led to increased support tickets from users unable to sign in.',
  'OPEN',
  '2025-01-02 09:15:00',
  '2025-01-02 09:15:00'
),
(
  'Dashboard charts not loading',
  'Several dashboard charts remain in a loading state indefinitely for some users. Initial investigation suggests that a recent API change introduced a mismatch in expected response formats, which prevents the frontend from rendering the chart data correctly.',
  'IN_PROGRESS',
  '2025-01-03 10:30:00',
  '2025-01-04 14:45:00'
),
(
  'Password reset email delayed',
  'Password reset emails are being delivered with significant delays, sometimes exceeding thirty minutes. This is likely due to throttling limits imposed by the email service provider after a recent spike in outbound messages.',
  'OPEN',
  '2025-01-04 08:20:00',
  '2025-01-04 08:20:00'
),
(
  'Typo in onboarding welcome message',
  'A minor typo was found in the onboarding welcome message shown to new users after account creation. While it does not affect functionality, it slightly reduces the perceived quality and professionalism of the product.',
  'CLOSED',
  '2024-12-28 11:00:00',
  '2024-12-29 09:10:00'
),
(
  'API returns 500 error on large payloads',
  'When clients submit payloads exceeding a certain size, the API responds with a generic 500 error instead of a validation message. This makes it difficult for integrators to diagnose the issue and adjust their requests accordingly.',
  'IN_PROGRESS',
  '2025-01-05 13:40:00',
  '2025-01-06 16:25:00'
),
(
  'Search results ignore date filters',
  'The search feature does not correctly apply selected date filters, returning results outside the specified range. This behavior is inconsistent and appears more frequently when multiple filters are combined.',
  'OPEN',
  '2025-01-06 09:05:00',
  '2025-01-06 09:05:00'
),
(
  'Mobile layout breaks on small screens',
  'On devices with very small screen widths, certain UI elements overlap and become unusable. The issue stems from fixed-width components that do not scale down gracefully in the current responsive design.',
  'IN_PROGRESS',
  '2025-01-01 15:50:00',
  '2025-01-03 12:00:00'
),
(
  'Exported CSV missing headers',
  'CSV files generated from the export feature are missing column headers, which makes the data difficult to interpret when opened in spreadsheet applications. The underlying data is correct, but metadata is not included.',
  'CLOSED',
  '2024-12-20 10:10:00',
  '2024-12-22 17:30:00'
),
(
  'Notifications not marked as read',
  'After clicking on notifications, they remain marked as unread in the notifications panel. This creates confusion for users who believe they have already reviewed all updates.',
  'OPEN',
  '2025-01-07 08:45:00',
  '2025-01-07 08:45:00'
),
(
  'Profile image upload fails silently',
  'When users attempt to upload a profile image larger than the allowed size, the upload fails without showing an error message. This lack of feedback leads users to repeatedly retry without understanding the cause.',
  'IN_PROGRESS',
  '2025-01-06 14:15:00',
  '2025-01-07 10:20:00'
),
(
  'Settings page loads slowly',
  'The settings page takes noticeably longer to load compared to other sections of the application. Performance profiling indicates multiple sequential API calls that could be combined or cached.',
  'OPEN',
  '2025-01-05 09:30:00',
  '2025-01-05 09:30:00'
),
(
  'Broken link in footer',
  'A link in the application footer points to an outdated documentation page that no longer exists. Users clicking the link encounter a 404 error, which undermines trust in the documentation.',
  'CLOSED',
  '2024-12-18 16:40:00',
  '2024-12-19 11:05:00'
),
(
  'User role changes not applied immediately',
  'When an administrator updates a user role, the changes do not take effect until the user logs out and back in. This delay can cause confusion and access issues in time-sensitive situations.',
  'IN_PROGRESS',
  '2025-01-04 12:00:00',
  '2025-01-06 09:45:00'
),
(
  'Form validation messages unclear',
  'Some form validation error messages are too generic and do not clearly explain what the user needs to fix. Improving the clarity would reduce form abandonment and support requests.',
  'OPEN',
  '2025-01-07 11:10:00',
  '2025-01-07 11:10:00'
),
(
  'Time zone mismatch in reports',
  'Generated reports display timestamps in the server time zone rather than the user’s selected time zone. This discrepancy can lead to misinterpretation of data, especially for international teams.',
  'IN_PROGRESS',
  '2025-01-03 08:00:00',
  '2025-01-05 18:20:00'
),
(
  'Duplicate entries in activity log',
  'The activity log occasionally shows duplicate entries for a single user action. This appears to happen when retries occur after a temporary network failure.',
  'OPEN',
  '2025-01-06 17:35:00',
  '2025-01-06 17:35:00'
),
(
  'Email preferences not saving',
  'Changes made to email notification preferences are not consistently saved. Users report that their settings revert after refreshing the page, suggesting a persistence issue.',
  'IN_PROGRESS',
  '2025-01-02 14:25:00',
  '2025-01-04 10:55:00'
),
(
  'Accessibility contrast issues',
  'Some text elements do not meet recommended contrast ratios, making them difficult to read for users with visual impairments. Addressing this will improve overall accessibility compliance.',
  'OPEN',
  '2025-01-07 09:00:00',
  '2025-01-07 09:00:00'
),
(
  'Session expires earlier than expected',
  'User sessions are expiring earlier than the configured timeout value. This forces users to re-authenticate more frequently than intended and disrupts workflow.',
  'IN_PROGRESS',
  '2025-01-01 10:10:00',
  '2025-01-03 16:30:00'
),
(
  'Outdated help article referenced',
  'An in-app help tooltip references an article that no longer reflects the current user interface. Updating the link and content will reduce confusion for new users.',
  'CLOSED',
  '2024-12-15 13:00:00',
  '2024-12-16 09:40:00'
),

(
  'Login fails for valid users',
  'Several users report that they are unable to log in using valid credentials. The issue appears intermittently and is more frequent during peak usage hours. Initial investigation suggests a possible session handling or authentication service timeout that needs further analysis.',
  'OPEN',
  '2025-01-02 09:15:00',
  '2025-01-02 09:15:00'
),
(
  'Dashboard loads slowly',
  'The main dashboard takes more than 10 seconds to load for users with large datasets. This performance degradation affects productivity and may be related to inefficient database queries or missing indexes.',
  'IN_PROGRESS',
  '2025-01-02 10:30:00',
  '2025-01-03 08:45:00'
),
(
  'Broken link in footer',
  'A link to the privacy policy in the website footer leads to a 404 error. This issue affects all users and should be fixed to maintain compliance and improve user trust.',
  'CLOSED',
  '2025-01-01 14:10:00',
  '2025-01-01 16:20:00'
),
(
  'Email notifications not sent',
  'Users are not receiving email notifications after updating their profiles. Logs show successful job execution, but emails are not delivered, suggesting a possible SMTP configuration or provider issue.',
  'OPEN',
  '2025-01-03 09:00:00',
  '2025-01-03 09:00:00'
),
(
  'Incorrect total in sales report',
  'The monthly sales report displays incorrect totals when filtered by region. This discrepancy may be caused by a faulty aggregation logic or missing currency conversions in the reporting service.',
  'IN_PROGRESS',
  '2025-01-02 11:45:00',
  '2025-01-03 07:30:00'
),
(
  'Password reset link expires too soon',
  'Users report that password reset links expire before they can complete the process. The current expiration window appears to be too short for typical user behavior.',
  'OPEN',
  '2025-01-03 08:20:00',
  '2025-01-03 08:20:00'
),
(
  'UI overlap on mobile devices',
  'On smaller screen sizes, several buttons overlap on the settings page, making them difficult to tap. This affects usability and needs responsive layout adjustments.',
  'IN_PROGRESS',
  '2025-01-01 09:40:00',
  '2025-01-02 13:15:00'
),
(
  'Search returns irrelevant results',
  'The search functionality often returns results that do not match the entered keywords. Improving relevance scoring and indexing strategy could significantly enhance user experience.',
  'OPEN',
  '2025-01-03 10:10:00',
  '2025-01-03 10:10:00'
),
(
  'API returns 500 error on bulk requests',
  'Bulk API requests occasionally fail with a 500 internal server error. This behavior seems correlated with payload size and may indicate memory or timeout constraints.',
  'IN_PROGRESS',
  '2025-01-02 15:00:00',
  '2025-01-03 09:10:00'
),
(
  'User profile image not updating',
  'When users upload a new profile image, the old image continues to display. Cache invalidation or CDN propagation delays may be causing the issue.',
  'OPEN',
  '2025-01-03 11:00:00',
  '2025-01-03 11:00:00'
),
(
  'Exported CSV missing headers',
  'CSV files exported from the reporting module are missing column headers, making them harder to interpret in spreadsheet tools.',
  'CLOSED',
  '2025-01-01 08:00:00',
  '2025-01-01 10:25:00'
),
(
  'Notifications badge count incorrect',
  'The notifications badge sometimes shows unread messages even after they have been opened. This issue may be related to state synchronization problems.',
  'IN_PROGRESS',
  '2025-01-02 16:40:00',
  '2025-01-03 08:55:00'
),
(
  'Unable to delete user account',
  'Users attempting to delete their accounts receive a generic error message. Backend logs indicate a foreign key constraint violation that needs handling.',
  'OPEN',
  '2025-01-03 12:10:00',
  '2025-01-03 12:10:00'
),
(
  'Timezone mismatch in activity logs',
  'Activity logs display timestamps in an incorrect timezone for some users. This inconsistency may be due to improper timezone conversion on the server.',
  'IN_PROGRESS',
  '2025-01-02 13:25:00',
  '2025-01-03 07:50:00'
),
(
  'Form validation messages unclear',
  'Validation errors on the registration form are vague and do not clearly indicate how to fix the input. Improving message clarity would reduce user frustration.',
  'OPEN',
  '2025-01-03 13:00:00',
  '2025-01-03 13:00:00'
),
(
  'Duplicate entries in audit logs',
  'Some actions are recorded twice in the audit logs, which complicates auditing and troubleshooting. This may be caused by duplicate event listeners.',
  'IN_PROGRESS',
  '2025-01-02 17:10:00',
  '2025-01-03 09:05:00'
),
(
  'Broken image on homepage banner',
  'The homepage banner image fails to load due to an incorrect asset path. This impacts the visual appeal of the landing page.',
  'CLOSED',
  '2025-01-01 11:30:00',
  '2025-01-01 12:00:00'
),
(
  'Role-based access not enforced',
  'Users with read-only roles are able to access edit screens. This is a serious security issue that requires immediate attention.',
  'OPEN',
  '2025-01-03 14:20:00',
  '2025-01-03 14:20:00'
),
(
  'Pagination resets on refresh',
  'When refreshing a paginated list, the view resets to the first page instead of preserving the current page. This disrupts user workflow.',
  'IN_PROGRESS',
  '2025-01-02 18:00:00',
  '2025-01-03 08:40:00'
),
(
  'Success toast not displayed',
  'After successfully saving changes, no confirmation message is shown to the user. This can cause confusion about whether the action was completed.',
  'CLOSED',
  '2025-01-01 15:45:00',
  '2025-01-01 16:10:00'
);
