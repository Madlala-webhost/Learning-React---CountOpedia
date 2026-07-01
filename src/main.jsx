
import { createRoot } from 'react-dom/client'
import Header from './layout/header.jsx';
import Footer from './layout/footer.jsx';
import Counter from './layout/counter.jsx';



const root = createRoot(document.getElementById('root'));

const HomePage = ()=> {
return(
<div className="d-flex flex-column min-vh-100">
  <Header/>
  <main className="flex-fill">
    <Counter></Counter>
  </main>
  <Footer/>

</div>
);
}

root.render(
  <HomePage />
)
