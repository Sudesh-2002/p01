import video1 from './assets/vid1.mp4'
function Youtube(){
  return(
    <div className='div1'>
      <video className='vid1' src={video1} controls></video>
      <h2>Ruu chaya song</h2>
      <p>this is our newly released song. 
        please follow us on twitter and subscribe our toutube channes</p>
    </div>
  );
}
export default Youtube