import React, { FC } from "react";

type Column<RecordType> = {
  title: string;
  key: string;
  dataIndex: keyof RecordType;
  render?: (value: any, record: RecordType) => JSX.Element;
};

type TableProps<RecordType> = {
  columns: Column<RecordType>[];
  dataSource: RecordType[];
};
function Table<RecordType>(props: TableProps<RecordType>) {
  return <table />;
}

type DataSource = {
  name: string;
  dateOfBirth: string;
  age: number;
  hasGuitar: boolean;
};
const dataSource: DataSource[] = [
  {
    name: "Dan",
    dateOfBirth: "1994-10-02",
    age: 24,
    hasGuitar: false,
  },
  {
    name: "John",
    dateOfBirth: "1996-11-02",
    age: 24,
    hasGuitar: false,
  },
];
const columns: Column<DataSource>[] = [
  {
    title: "Name",
    key: "name", // unique key for the column
    dataIndex: "name", // key from the data source
  },
  {
    title: "Date Of Birth",
    key: "dateOfBirth",
    dataIndex: "dateOfBirth",
    render: (value: string, record) => {
      // render method to create custom UI
      return (
        <span>
          {record.name} - {new Date(value).getFullYear()}
        </span>
      );
    },
  },
];
const App: FC = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export { App };
