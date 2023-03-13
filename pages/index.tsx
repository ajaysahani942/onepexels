
import  Navbar from '../components/Navbar';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
     
   
     <Navbar />

      <div style={{
        zIndex: -1,
        position: 'fixed',
        width:'100vw',
        height:'100vh'
      }}>
      <Image  src='/nature.jpeg'
      alt='nature'
      layout='fill'
      objectFit='cover'/>
      </div>
      

      <div>Hello World</div>
    </div>
  );
}