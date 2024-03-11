import image from './co.jpg'


const app=(()=>{
  return(
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand " href="#"><img style={{height:'80px',marginLeft:'130px'}} src={image} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a style={{color:'rgb(101,115,181)', fontWeight:'25px', marginLeft:'380px'}} class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a style={{color:'rgb(101,115,181)', fontWeight:'25px', marginLeft:'30px'}} class="nav-link" href="#">Programmes</a>
        </li>
        <li class="nav-item">
          <a style={{color:'rgb(101,115,181)', fontWeight:'25px', marginLeft:'30px'}} class="nav-link" href="#">Admission</a>
        </li>
        <li class="nav-item">
          <a style={{color:'rgb(101,115,181)', fontWeight:'25px', marginLeft:'30px'}}  class="nav-link" href="#">E-portal</a>
        </li>
        <li class="nav-item">
          <a style={{color:'rgb(101,115,181)', fontWeight:'25px', marginLeft:'30px'}}  class="nav-link" href="#">SQI scholarship</a>
        </li>
        <li class="nav-item">
          <a style={{color:'rgb(101,115,181)', fontWeight:'25px', marginLeft:'30px'}}  class="nav-link" href="#">News</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    
    
    </>
  )
})

export  default app;
