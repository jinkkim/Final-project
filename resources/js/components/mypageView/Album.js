import React from 'react'

export const Album = ({couple_key, albums, last_one}) => (
    <div id='album'>
    
        <div className='card-header p-2 border mt-1' data-toggle="modal" data-target="#albumModal">Album (click here to modify)</div>

        <div className="modal fade" id="albumModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Your album</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            
            
            <div className="modal-body">

                <form action='/albumUpload' method='POST'>
                    <small className="form-text text-muted">*required</small>
                    
                    <div className="form-group row" >
                        <label htmlFor="inputPhotolink" className="col-sm-2 col-form-label">Photo link*</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputPhotolink" name="photo_link" placeholder="Photo link"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label>
                        <div className="col-sm-10">
                          <input type="date" className="form-control" id="inputDate" name="date" placeholder="When did you take?"></input>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="inputDescription" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputDescription" name="descr" placeholder="Short explanation"></input>
                        </div>
                    </div>

                    <div className="form-group row" >
                        <div className="col-sm-10">
                          <input type="hidden" className="form-control" id="inputCoupleKey" name="couple_key" value={couple_key}></input>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-sm offset-11" type="submit" name="action">Upload</button>
                </form>
                <hr></hr>
                <div className="row justify-content-around">
                    {albums.map((album) => (
                        <div className="card" style={{"width": "11rem"}}>
                            <img className="card-img-top" src={album.photo_link} height="100"></img>
                            <div className="card-body">
                                <h6 className="card-title mb-0">{album.date.substring(0,10)}</h6>
                                <p className="card-text">{album.descr}</p>
                                <div className="d-flex justify-content-around">
                                    <a href="#" className="btn btn-sm btn-primary">Modify</a>
                                    <a href="#" className="btn btn-sm btn-danger">Delete</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

            <div id="AlbumCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    
                    {albums.map((album) => (
                        <div className="carousel-item">
                            <img className="d-block w-100" src={album.photo_link}></img>
                            <div className="carousel-caption">
                                <h5>{album.date.substring(0,10)}</h5>
                                <p>{album.descr}</p>
                            </div>
                        </div>
                    ))} 
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={last_one.photo_link}></img>
                        <div className="carousel-caption">
                            <h4>Your precious memories</h4>
                        </div>
                    </div>
   
                </div>
                <a className="carousel-control-prev" href="#AlbumCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#AlbumCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
    </div>
)
