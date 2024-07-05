export const generateEmailTemplate = (data) => {
  return `
    <html>
    <body>
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Comment:</strong> ${data.comment}</p>
      <p><strong>Service Category Tags:</strong> ${data.categoryTags.join(', ')}</p>
      <p><strong>Price Range:</strong> ${data.priceRange}</p>
    </body>
    </html>
  `;
};