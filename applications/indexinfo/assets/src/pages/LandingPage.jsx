import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>

      <div className="hero min-h-auto bg-base-200 pt-44">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Muybridge_race_horse_animated.gif" className="shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Index Info</h1>
            <p className="py-6">
              Built using Django & React: Your personalized video indexing platform. Organize, discover, and enjoy your favorite videos in one place. Create curated playlists, explore diverse content, and experience seamless integration with InfoIndex.
            </p>
            <Link to={'/content-index'}>
              <button className="btn btn-accent">LAUNCH APP</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">Sign up to InfoIndex to unlock the full potential of this software, major indexing abilities matched with a clean and modern design.</p>
          <ul className="list-disc pl-6">
            <li className="py-1"><b>Organize</b> Your Videos: Create customized playlists and organize your favorite videos effortlessly.</li>
            <li className="py-1"><b>Discover</b> New Content: Explore a diverse range of videos and discover new content tailored to your interests.</li>
            <li className="py-1"><b>Seamless</b> Integration: Enjoy a user-friendly experience with InfoIndex's clean and modern design.</li>
            <li className="py-1"><b>Personalized</b> Experience: Tailor your video-watching experience by saving preferences and settings.</li>
            <li className="py-1"><b>Stay</b> Updated: Receive notifications and updates on your favorite video creators and channels.</li>
            <li className="py-1"><b>Effortless</b> Sharing: Share your curated playlists with friends and discover videos recommended by others.</li>
          </ul>
        </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-disabled" tabIndex="-1" role="button" aria-disabled="true">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
