import React, { useEffect, useState, useRef } from 'react';
import Layout from './layout/Layout';
import axios from 'axios';
import { SendFill } from 'react-bootstrap-icons';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedback, postFeedback, setFeedback } from '../features/UserReducer';
import { FadeLoader, HashLoader, MoonLoader } from 'react-spinners';

const Community = () => {
  const { feedback,loading } = useSelector((state) => state.users_info);
  const dispatch = useDispatch();
  const messagesContainerRef = useRef();

  const formik = useFormik({
    initialValues: {
      messages: '',
    },
    onSubmit: async (values) => {
      try {
        // const response = await axios.post('https://65615e6adcd355c08323c948.mockapi.io/users', values);
        dispatch(postFeedback(values));
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    if (feedback.length === 0) {
      dispatch(fetchFeedback());
    } else {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [feedback]);

  return (
    <Layout>
      <main className='container-fulid'>
        <article className='row justify-content-center'>
          <section className='col-lg-8'>
            <div className='card shadow mb-4' style={{ height: '85vh' }}>
              <header className='card-header py-3 text-center'>
                <h5 className='m-0 font-weight-bold text-orange'>Enjoy with our community</h5>
              </header>
              <main className='card-body overflow-y-auto' ref={messagesContainerRef}>
                
                {loading?
              <HashLoader /> : (feedback.map((item) => (
                <div key={item.id} className='mb-3 bg-grey'>
                  {item.messages}
                </div>
              ))  )
              }
              </main>
              <footer className='card-footer p-0 py-3 m-0'>
                <form onSubmit={formik.handleSubmit}>
                  <fieldset className='form-group row justify-content-center m-0'>
                    <div className='col-lg-7'>
                      <input
                        type='text'
                        className='form-control'
                        value={formik.values.messages}
                        onChange={formik.handleChange}
                        name='messages'
                        id='messages'
                      />
                    </div>
                    <button className='col-lg-1 btn btn-success' disabled={formik.values.messages === ''} type='submit'>
                      {
                        loading? <FadeLoader color="#36d7b7" /> : <SendFill />
                      }
                    </button>
                  </fieldset>
                </form>
              </footer>
            </div>
          </section>
        </article>
      </main>
    </Layout>
  );
};

export default Community;
