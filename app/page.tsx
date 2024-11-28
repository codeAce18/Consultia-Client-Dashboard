'use client';
// import Image from "next/image";

import {useState} from 'react';
import Modal from './components/Modal';
import SideBar from './components/Sidebar';

export default function Home() {

  const [showModal, setShowModal] = useState(true);

  // useEffect(() => {
  //   const isFirstLoad = localStorage.getItem('firstLoad') === null;
  //   if (isFirstLoad) {
  //     setShowModal(true);
  //     localStorage.setItem('firstLoad', 'false');
  //   }
  // }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (

    <div className="relative">
      <SideBar />
      {showModal && <Modal onClose={handleCloseModal} />}

    </div>

  );
}
