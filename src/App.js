import'./App.css';
import ContactlistComponent from './Components/ContactListComponent/ContactListComponent';
import ConversationComponent from './Components/CoversationComponent/ConversationComponent';

function App() {
  return (
    <div className='container'>
      <ContactlistComponent />
      <ConversationComponent />
    </div>
  );
}

export default App;
