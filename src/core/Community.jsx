import React, { useEffect, useState } from 'react';
import Layout from './layout/Layout';
import axios from 'axios';

const Community = () => {
  const [feedback, setFeedback] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('https://65615e6adcd355c08323c948.mockapi.io/users');
        setFeedback(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://65615e6adcd355c08323c948.mockapi.io/users', {
        messages: newMessage,
      });

      setFeedback([...feedback, response.data]);
      setNewMessage('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <main className='container-fulid'>
        <article className='row justify-content-center'>
          <section className='col-lg-8'>
            <div className='card shadow mb-4' style={{height:'85vh'}}>
              <header className='card-header py-3 text-center'>
                <h5 className='m-0 font-weight-bold text-orange'>Enjoy with our community</h5>
              </header>
              <main className='card-body overflow-y-auto'>
                {/* Use overflow-y-auto to enable vertical scrolling */}
                {feedback.map((item) => (
                  <div key={item.id} className='mb-3'>
                    {item.messages}
                  </div>
                ))}
              </main>
              <footer className='card-footer'>
                <form onSubmit={handleSubmit}>
                  <fieldset className='form-group row justify-content-center '>
                    <input
                      type='text'
                      className='form-control col-lg-6'
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <input type='submit' className='btn btn-primary col-lg-3' value={'Submit'} />
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
