function Welcome(props) {
  return <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>;
}



function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);