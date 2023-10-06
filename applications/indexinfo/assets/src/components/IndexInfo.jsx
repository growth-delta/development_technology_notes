import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubjects } from '../redux/actions/subjects';


function IndexInfo() {
  const dispatch = useDispatch();
  const { subjects, loading, error } = useSelector((state) => state.subjectsData);

  const [selectedUrl, setSelectedUrl] = useState("https://www.youtube-nocookie.com/embed/SDoIbFuKgfU?si=zCoD4YPyV9B0TWut");

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  return (
    <div className="flex flex-col h-screen">
      <div className="navbar bg-base-300">
        <div className="navbar-start"></div>
        <div className="navbar-center"><Link to={'/'}><img to={'/'} className='h-16' src='/logo.png'></img></Link></div>
        <div className="navbar-end"><label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Content</label></div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="drawer lg:drawer-open w-full">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <div className="h-full w-full">
              <iframe
                className='w-full h-full'
                src={selectedUrl}
                title="Video Player"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="drawer-side overflow-y-auto">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu menu-xs p-4 min-h-full bg-base-200 text-base-content">
                {loading && <li>Loading subjects...</li>}
                {error && <li>Error: {error}</li>}
                {subjects && subjects.map((subject) => (
                  <li key={subject.id}>
                    <details>
                      <summary>
                        <i className="fa-regular fa-folder-open"></i>
                        {subject.title}
                      </summary>
                      <ul>
                        {subject.urls.map((urlObj) => (
                          <li key={urlObj.id} onClick={() => setSelectedUrl(urlObj.url)}>
                            <a className={selectedUrl === urlObj.url ? 'active' : ''}>
                              <i className="fa-solid fa-play"></i>
                              {urlObj.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndexInfo;
