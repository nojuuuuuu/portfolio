import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // ここにフォーム送信のロジックを追加
    // 例: メール送信APIの呼び出しなど
  };

  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>
          お問い合わせ
        </p>
        <h2 className='py-4'>ご連絡はこちら</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* 左側 */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <h2 className='py-2'>nojuuu</h2>
                <p>university student</p>
              </div>
              <div>
                <p className='uppercase pt-8'>お気軽にご連絡ください</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href='https://github.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                  >
                    <FaGithub />
                  </a>
                  <a
                    href='https://twitter.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href='mailto:info@example.com'
                    className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                  >
                    <HiOutlineMail />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 右側 */}
          <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>お名前</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      {...register('name', { required: true })}
                    />
                    {errors.name && <span className='text-red-500'>お名前は必須です</span>}
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>電話番号</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      {...register('phone')}
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>メールアドレス</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span className='text-red-500'>メールアドレスは必須です</span>}
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>件名</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    {...register('subject')}
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>メッセージ</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows={10}
                    {...register('message', { required: true })}
                  ></textarea>
                  {errors.message && <span className='text-red-500'>メッセージは必須です</span>}
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>送信する</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 