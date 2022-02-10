import './App.css';
import UserList from './components/user-list/user-list.component';
import UserProfile from './components/user-profile/user-profile.component';

function App() {
  return (
    <div className="App">
      <UserProfile name="Rodolfo L" email="rudylpzjme@gmail.com" />
      <UserList />
    </div>
  );
}

export default App;
