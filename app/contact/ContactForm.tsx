'use client';

import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import TextArea from '@/components/Textarea';
import { ChangeEvent, useState } from 'react';

export default function ContactForm() {
  const [error, setError] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message, phone } = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      message: { value: string };
    };
    if (!name.value) {
      setError((val) => ({ ...val, name: 'Name is required' }));
    }
    if (!email.value) {
      setError((val) => ({ ...val, email: 'Email is required' }));
    }
    if (!message.value) {
      setError((val) => ({ ...val, message: 'Message is required' }));
    }
    if (!phone.value) {
      setError((val) => ({ ...val, phone: 'Phone is required' }));
    }
    if (Object.values(error).some((val) => val)) return;
  };

  return (
    <div className='mx-auto flex max-w-content flex-col bg-primary-peach bg-contact-form-pattern-mobile bg-contact-form-position-mobile px-6 py-[4.5rem] md:rounded-2xl md:bg-contact-form-pattern md:bg-contact-form-position md:bg-no-repeat md:px-[58px] lg:flex-row lg:bg-left-bottom lg:px-24'>
      <div className='mb-12 text-center text-white md:text-left lg:my-auto lg:flex-1'>
        <Heading level='1' className='mb-6 block text-CTA lg:mb-8 lg:text-h1'>
          Contact Us
        </Heading>
        <p className='lg:max-w-[440px]'>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <form
        className='flex w-full flex-col gap-6 lg:max-w-[380px] lg:flex-1'
        onSubmit={handleSubmit}
      >
        <Input
          name='name'
          type='text'
          placeholder='Name'
          errorMessage={error.name}
        />
        <Input
          name='email'
          type='email'
          placeholder='Email Address'
          errorMessage={error.email}
        />
        <Input
          name='phone'
          type='tel'
          placeholder='Phone'
          errorMessage={error.phone}
        />
        <TextArea
          name='message'
          placeholder='Your Message'
          errorMessage={error.message}
        />
        <Button
          type='submit'
          className='mx-auto mt-4 px-12 md:ml-auto md:mr-0 md:mt-0'
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
