import Header from '../components/Header';
import Separator from '../components/Separator';
import Separator1 from '../components/Separator1';
import Sidebar from '../components/Sidebar';
import Content from './Content';
import banner from '../assets/banner.png';

export interface User {
  name: string;
  age: number;
  pursuing: string;
}
const user = {
  name: 'Rehana',
  age: 18,
  pursuing: 'B-Tech',
};

const Umpcomingex = () => {
  return (
    <div className="h-screen bg-zinc-300 text-slate-900  w-screen transition-colors duration-300 dark:bg-zinc-900 dark:text-slate-100 ">
      <Header user={user} />
      <div className="overflow-hidden w-full h-40">
  <img
    src={banner}
    alt=""
    className="w-full h-full object-cover scale-150 origin-center"
  />
</div>



      <div className="flex ">
        <Sidebar />
        <Separator />
        <Content />
      </div>
      <Separator1 />
    </div>
  );
};

export default Umpcomingex;
