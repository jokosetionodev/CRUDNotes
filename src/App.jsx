import CardArsip from "./container/components/CardArsip/CardArsip";
import CardView from "./container/components/CardView/CardView";
import Header from "./container/components/Header/Header";
import NotesInput from "./container/components/NotesInput/NotesInput";
import UtilsData from "./UtilsData/UtilsData";
import { useEffect, useState } from "react";

function App() {
  const [dataView, setDataView] = useState([]);
  useEffect(() => {
    const data = UtilsData();
    setDataView(data);
  }, []);

  const onDelete = (id) => {
    const newData = dataView.filter((item) => item.id !== id);
    setDataView(newData);
  };
  const onArsip = (id) => {
    dataView.forEach((item) => {
      if (item.id === id) {
        item.archived = true;
      }
    });

    setDataView([...dataView]);
  };

  const onSearch = (search) => {
    const newData = dataView.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setDataView(newData);
  };
  return (
    <div>
      <Header onSearch={onSearch} />
      <NotesInput addNote={setDataView} />
      <CardView data={dataView} onDelete={onDelete} onArsip={onArsip} />;
      <CardArsip data={dataView} onDelete={onDelete} />
    </div>
  );
}
export default App;
