import React, { useEffect, useState } from 'react'; // React core
import { Link } from 'react-router-dom'; // React Router
import { useDispatch, useSelector } from 'react-redux'; // React-Redux hooks
import { fetchSubjects } from '../redux/actions/subjects';


function IndexInfo() {
  const dispatch = useDispatch();
  const subjects = useSelector((state) => state.subjectsData.subjects);
  const loadingSubjects = useSelector((state) => state.subjectsData.loading);
  const errorSubjects = useSelector((state) => state.subjectsData.error);

  const [selectedUrl, setSelectedUrl] = useState('');

  useEffect(() => {
    dispatch(fetchSubjects());
  }, [dispatch]);

  const handleSubjectClick = (subject) => {
    if (subject.urls && subject.urls.length > 0) {
      setSelectedUrl(subject.urls[0].url); // Set the first URL of the clicked subject
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="navbar bg-base-300">
        <div className="navbar-start"></div>
        <div className="navbar-center"><Link to={'/'}><img to={'/'} className='h-16' src='/logo.png'></img></Link></div>
        <div className="navbar-end"><label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label></div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="drawer lg:drawer-open w-full">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <div className="h-full w-full">
              <iframe
                className='w-full h-full'
                src={`${selectedUrl ? selectedUrl.split('=')[0] : ''}`} // Extracting video ID from the URL
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {loadingSubjects && <li>Loading subjects...</li>}
              {errorSubjects && <li>Error: {errorSubjects}</li>}
              {subjects && subjects.map((subject) => (
                <li key={subject.id} onClick={() => handleSubjectClick(subject)}>
                  <a>{subject.title}</a>
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
