import { A } from "solid-start";
export default function NotFound() {
  return (
      <main className="text-center mx-auto text-gray-700 p-4 flex justify-center items-center flex-col">
          <h1 className="max-6-xs text-6xl text-orange-500 font-thin uppercase my-16">
              UNDER CONSTRUCTION
          </h1>
          <div className="lg:w-1/2 w-full mb-20">
              <h1 className={'text-3xl'}>Hi! I'm AG and I'm a Full Stack Developer</h1>
              <p className={'text-lg mb-5'}>This Website is just a Sample Landing Page. If you want to have a website
                  like this, please do contact me on my contact information below.
                  Also if you have any feedback to improve the existing design please leave a comment and click submit
                  button. Thanks!</p>

              <div className="bg-white shadow-lg p-5 rounded-lg flex flex-col items-center justify-center mb-10">
                  <h4 className={'text-lg mb-5'}>Contact Information</h4>
                  <table>
                      <tbody>
                      <tr className={'mb-3'}>
                          <td className={'text-left p-3 text-slate-400'}>Address</td>
                          <td className={'text-left p-3'}>1st Crumb Street, Digos City, Davao del Sur, Philippines</td>
                      </tr>
                      <tr>
                          <td className={'text-left p-3 text-slate-400'}>Contact Number</td>
                          <td className={'text-left p-3'}>+63 9777 593 138</td>
                      </tr>
                      <tr>
                          <td className={'text-left p-3 text-slate-400'}>Email</td>
                          <td className={'text-left p-3'}>agnieve70@gmail.com</td>
                      </tr>
                      <tr>
                          <td className={'text-left p-3 text-slate-400'}>GitHub</td>
                          <td className={'text-left p-3'}>agnieve70</td>
                      </tr>
                      <tr>
                          <td className={'text-left p-3 text-slate-400'}>LinkedIn</td>
                          <td className={'text-left p-3'}><a href="https://www.linkedin.com/in/ag-nieve-32565a212/">AG
                              Nieve</a></td>
                      </tr>
                      </tbody>
                  </table>
              </div>
              <div className={'bg-secondary p-5 rounded-2xl'}>
                  <form action="">
                      <h1 className={'text-white text-3xl mb-3'}>Your Feedback Matters</h1>
                      <div className={'flex flex-col mb-5'}>
                          <input className={'h-10 px-5 border-2 border-slate-100 rounded-full py-6'} type={'text'}
                                 id={'name'} placeholder={'Full Name'}/>
                      </div>
                      <div className={'flex flex-col mb-5'}>
                          <input className={'h-10 px-5 border-2 border-slate-100 rounded-full py-6'} type={'email'}
                                 id={'email'} placeholder={'Your Email'}/>
                      </div>
                      <div className={'flex flex-col'}>
                          <textarea placeholder={'Feedback/Comment'}
                                    className={'p-5 border-2 border-slate-100 rounded-2xl'} id="comment" cols="30"
                                    rows="5"></textarea>
                      </div>
                      <button className={'text-lg font-bold bg-primary text-white rounded-full px-12 py-4 mt-3'}>SEND
                      </button>
                  </form>
              </div>


          </div>
      </main>
  );
}
