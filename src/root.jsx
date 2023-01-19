// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
export default function Root() {
  const location = useLocation();
  const active = (path) =>
    path == location.pathname
      ? "border-secondary"
      : "border-transparent hover:border-secondary";
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With TailwindCSS</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div className={'flex justify-between items-center py-8 px-20'}>
              <img src={'./img/logo-01.png'} width={250} height={'auto'} />
              <div>
                <input className={'rounded-3xl border-2 border-slate-400 py-2 px-5 mr-3'} placeholder={'Search'} />
                <button className={'rounded-3xl bg-secondary py-2 px-6 font-bold text-white border-2 border-secondary'}>Login</button>
              </div>
            </div>
            <nav class="bg-primary flex flex-row justify-center">
              <ul class="container flex justify-between items-center py-5 px-10 text-gray-200">
                <li class={`border-b-2 font-bold ${active("/")} mx-1.5 sm:mx-6`}>
                  <A href="/">HOME</A>
                </li>
                <li class={`border-b-2 font-bold ${active("/about")} mx-1.5 sm:mx-6`}>
                  <A href="/about">ABOUT US</A>
                </li>
                <li className={`border-b-2 font-bold ${active("/services")} mx-1.5 sm:mx-6`}>
                  <A href="/services">SERVICES</A>
                </li>
                <li className={`border-b-2 font-bold ${active("/education")} mx-1.5 sm:mx-6`}>
                  <A href="/education">EDUCATION</A>
                </li>
                <li className={`border-b-2 font-bold ${active("/membership")} mx-1.5 sm:mx-6`}>
                  <A href="/membership">MEMBERSHIP</A>
                </li>
                <li className={`border-b-2 font-bold ${active("/resources")} mx-1.5 sm:mx-6`}>
                  <A href="/resources">RESOURCES</A>
                </li>
                <li className={`border-b-2 font-bold ${active("/news")} mx-1.5 sm:mx-6`}>
                  <A href="/news">LATEST NEWS</A>
                </li>
                <li className={`border-b-2 font-bold ${active("/contact")} mx-1.5 sm:mx-6`}>
                  <A href="/contact">CONTACT US</A>
                </li>
              </ul>
            </nav>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
      <footer className={'bg-zinc-800 py-20 px-24'}>
        <div className={'flex'}>
          <div className="w-1/4">
            <img src={'./img/logo-02.png'} className={'h-32 mb-3'} />
            <p className={'text-lg text-white'}>© Copyright 2023 AG Solutions</p>
            <p className={'text-lg text-white'}>All Rights Reserved</p>
            <div className={'flex space-x-4 mt-5'}>
              <img src={'./img/facebook-app-symbol.png'} className={'h-5'} />
              <img src={'./img/twitter.png'} className={'h-5'} />
              <img src={'./img/instagram.png'} className={'h-5'} />
              <img src={'./img/linkedin.png'} className={'h-5'} />
              <img src={'./img/social.png'} className={'h-5'} />
            </div>
          </div>
          <div className="w-3/4">
            <div className="flex justify-between px-20">
              <div className="1/3">
                <h4 className={'text-2xl text-white font-bold'}>RESOURCES</h4>
                <h4 className={'text-lg text-white leading-9'}>Lorem ipsum dolor.</h4>
                <h4 className={'text-lg text-white leading-9'}>Lorem ipsum dolor sit.Q</h4>
                <h4 className={'text-lg text-white leading-9'}>Lorem ipsum dolor.</h4>
                <h4 className={'text-lg text-white leading-9'}>Lorem ipsum dolor.</h4>
              </div>
              <div className="1/3">
                <h4 className={'text-2xl text-white font-bold'}>RESOURCES</h4>
                <h4 className={'text-lg text-white leading-9'}>Lorem ipsum dolor.</h4>
                <h4 className={'text-lg text-white leading-9'}>Lorem ipsum dolor sit.Q</h4>
                <h4 className={'text-lg text-white leading-9'}>Lorem ipsum dolor.</h4>
                <h4 className={'text-lg text-white leading-9'}>Lorem ipsum dolor.</h4>
              </div>
              <div className="1/3">
                <h4 className={'text-2xl text-white font-bold'}>CONTACT US</h4>
                <h4 className={'text-lg text-white leading-9'}>1st Crumb, Digos City, Davao del Sur, Philippines</h4>
                <h4 className={'text-lg text-white leading-9'}>+63 9777 593 138</h4>
                <h4 className={'text-lg text-white leading-9'}>agnieve70@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Html>
  );
}
