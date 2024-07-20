import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters long')
    .max(30, 'Name cannot be longer than 50 characters'),
  company: Yup.string()
    .max(30, 'Company Name cannot be longer than 50 characters'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  comment: Yup.string()
    .required('Comment is required')
    .min(20, 'Comment must be at least 20 characters long')
    .max(700, 'Comment cannot be longer than 500 characters'),
  categoryTags: Yup.array().min(1, 'At least one category tag is required'),
  priceRange: Yup.string().required('Price range is required'),
});