import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const storeSetValue = () => {
    const name = localStorage.getItem('name');
    if (name) {
      setName(name);
    }
    const email = localStorage.getItem('email');
    if (email) {
      setEmail(email);
    }
    const phone = localStorage.getItem('phone');
    if (phone) {
      setPhone(phone);
    }
  };

  useEffect(storeSetValue, []);

  const storeProfile = (e) => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    setIsEdit(false);
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Blocklet Profile</title>
      </Head>
      <main className={styles.main}>
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={storeProfile}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                用户名
              </label>
              {isEdit ? (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  maxLength={50}
                  required
                  placeholder="请输入用户名"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              ) : (
                <div className='text-slate-700"'>{name || '(空)'}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                邮箱
              </label>

              {isEdit ? (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  required
                  placeholder="请输入邮箱"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              ) : (
                <div className='text-slate-700"'>{email || '(空)'}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                手机号
              </label>
              {isEdit ? (
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  maxLength={11}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="请输入手机号"
                />
              ) : (
                <div className='text-slate-700"'>{phone || '(空)'}</div>
              )}
            </div>
            <div className="flex items-center justify-between">
              {isEdit ? (
                <>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit">
                    保存
                  </button>
                  <a
                    className="block flex-1 text-center text-sm text-gray-600 hover:text-gray-800 font-medium px-3 py-4 group"
                    onClick={() => {
                      setIsEdit(false);
                      storeSetValue();
                    }}>
                    <div className="flex items-center justify-center ">
                      <span>取消</span>
                    </div>
                  </a>
                </>
              ) : (
                <a
                  className="block flex-1 text-center text-sm text-gray-600 hover:text-gray-800 font-medium px-3 py-4 group"
                  onClick={() => setIsEdit(true)}>
                  <div className="flex items-center justify-center ">
                    <span>编辑</span>
                  </div>
                </a>
              )}
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">&copy;2023 iCoding. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}
