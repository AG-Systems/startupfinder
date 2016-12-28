window.onload = function() {    
    var List = React.createClass({
        render: function() {
          return (
            <div>
              {this.props.list.map( post =>
                <div id="main" className={post.id}>
                    <div className="card">
                      <img className="card-img-top" src="https://placehold.it/350x150" alt="Card image cap" />
                      <div className="card-block">
                        <h4 className="card-title">{ post.title }</h4>
                        <p className="card-text">{ post.body }</p>
                        <button type='button' id={"contactbtn"+ post.id }className="btn btn-primary"> Yes, I'm Interested </button>
                        <button type='button' id ="skip" className="btn btn-danger"> No, Skip </button>
                      </div>
                    </div>
                </div>
              )}
            </div>
          )
        }
      });
      
       var Info = React.createClass({
        render: function() {
          return (
            <div>
              {this.props.list.map( post =>
                <div id="info" className={post.id}> 
                    <div className="card">
                      <div className="card-block">
                        <p className="card-text">{ post.website }</p>
                        <button type='button' id={"skip" + post.id }className="btn btn-warning"> Next </button>
                      </div>
                    </div>
                </div>
              )}
            </div>
          )
        }
      });
    var Card = React.createClass({
      render() {
        return (
            <List list={post} />
        )
      }
    });
    var Infocard = React.createClass({
      render() {
        return (
            <Info list={post} />
        )
      }
    });
    ReactDOM.render(
      <Card/>, 
      document.getElementById('container')
    );
    ReactDOM.render(
      <Infocard/>, 
      document.getElementById('info')
    );
    
    function next(counter)
    {
      $("."+ counter).hide();
      counter++;
      $("." + counter).fadeIn();
      $("#info").hide();    
    };
  
    $("#info").hide();
    var counter = 1;
    
    $( "#contactbtn" + counter ).click(function() 
    {
        $("#info").fadeIn();
        console.log("buttonpressed");
    });
    // Next & Not interested buttons
    $( "#skip" + counter).click(function() 
    {
        next(counter); 
    });
    for(var z = 3; z > counter; z--)
    {
        $("." + z).hide();
    }

};