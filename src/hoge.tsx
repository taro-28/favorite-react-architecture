import { FC, ReactNode } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const Table: FC<{ children: ReactNode }> = ({ children }) => {
  return <table>{children}</table>;
};

const MemberTable: FC<{ children: ReactNode }> = ({ children }) => {
  return <Table>{children}</Table>;
};

const MemberTableHat: FC = () => {
  return <div></div>;
};

const MemberTableBody: FC = () => {
  return <tbody></tbody>;
};

const MemberTableFooter: FC = () => {
  return <div></div>;
};

const Pagination: FC = () => {
  return <div></div>;
};

const Footer: FC = () => {
  return (
  );
};

const MemberPage: FC = () => {
  const searchWord = ''
  const selectedIds = []
  const handleSearch = ()=> null;
  const handleSelectAll = ()=> null;
  return (

// ちょっと極端だけど… 
<MemberTableHat
  searchWord={searchWord}
  onSearch={handleSearch}
  selectedIds={selectedIds}
  onSelectAll={handleSelectAll}
/>
/////////////////////////////////////

// 中でもさらにネスト 
<div>
  {selectedIds.length === 0 ? (
    <MemberTableSearch
      searchWord={searchWord}
      onSearch={handleSearch}
    />
    ) : (
    <MemberTableSelect
      selectedIds={selectedIds}
      onSelectAll={handleSelectAll}
    />
  )}
</div>

<Table>
  {/* これくらいならネストさせない */} 
  <div>
    {selectedIds.length === 0 ? (
      <SearchBox
        searchWord={searchWord}
        onSearch={handleSearch}
      />
    ) : (
      <div>
        {selectedIds.length}件選択中
        <Button name='全件選択する' onClick={handleSelectAll} />
      </div>
    )}
  </div>
  {/* 以下略 */} 
</Table>


  );
};

const MemberTableRow: FC = () => {
  return (
    <tr>
      <td></td>
    </tr>
  );
};

const MemberTablePagination: FC = () => {
  return <div></div>;
};


// こうじゃなくて 
<Footer page={page} onChange={onChange}/>

// childrenを使ってこうする 
<Footer>
  <Pagination page={page} onChange={onChange}/>
</Footer>



const JPYInput = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value)

  return (
    <>
      <input value={value} onChange={handleChange} />
      {/* propで受け取ったrender関数にstateを渡す */} 
      {props.render(value)}
    </>
  );
};

<h1>外貨換算</h1>
<JPYInput
  // 内部のstateを受け取ってJSXを返す関数をpropで渡す 
  render={(value) => (
    <>
      <USD value={value} />
      <EUR value={value} />
    </>
  )}
/>

const MembersPage = ({ companyId }) => {
  return (
  );
}

const initialSortKey = ''

<MemberTable
  // 動的なkeyを渡す 
  key={companyId}
  members={members}
/>

const MemberTable = ({ members })=> {
  // keyが変わると全てのstateが初期化される 
  const [searchWord, setSearchWord] = useState('');
  const [sortKey, setSordKey] = useState(initialSortKey);

  members

}


function Profile({ userId }) {
  // ✅ This and any other state below will reset on key change automatically
  const [comment, setComment] = useState('');
  // ...
}



export default function App() {
  return (
    <div>
      <h1>外貨換算</h1>
      <JPYInput
        render={(value) => (
          <>
            <USD value={value} />
            <EUR value={value} />
          </>
        )}
      />
    </div>
  );
}

/**
 * リスト中の複数の要素の選択hook
 */
const MemberTable = ({ members }) => {
  const [selectedIds, setSelectedIds] = useState([]);

  // 元のデータに存在しないIDを保持しているのは、　
  // 状態として正しくないため削除 
  const correctSelectedIds = members.filter((id) => selectedIds.includes(id));
  if (correctSelectedIds.length !== selectedIds.length) {
    setSelectedIds(correctSelectedIds);
  }

  return {
    /** 選択中の要素のリスト */
    selectedItems: selectedIds,
    /** 1件選択/解除 */
    handleSelectToggle,
    /** 一括選択/解除 */
    handleSelectBulkToggle
  };
};