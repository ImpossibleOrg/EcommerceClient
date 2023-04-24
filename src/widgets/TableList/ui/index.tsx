import { useState } from 'react';

import type { TableItemLinkType } from './Item';
import type { SortActiveType } from './SortButton';

import { PaginationBox } from '../../Pagination';

import { TableHeading } from './Heading';
import { TableItem } from './Item';

type TableListProps = {
  items: { [key: string]: TableItemLinkType }[];
  activeSort: SortActiveType;
  onSortChange: (active: SortActiveType) => void;
  actions: (name: string, id: string) => JSX.Element;
};

export const TableList = ({
  items,
  onSortChange,
  activeSort,
  actions,
}: TableListProps) => {
  const [productPerPage, setProductsPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = items.slice(indexOfFirstProduct, indexOfLastProduct);

  const headingKeys =
    items[0] &&
    Object.entries(items[0]).map(([key, value]) => ({
      name: key,
      width: value.width,
      sortable: value.sortable,
    }));

  return (
    <>
      <div className={'w-full bg-white rounded-md mb-4'}>
        <TableHeading
          headingKeys={headingKeys}
          activeSort={activeSort}
          handleSortChange={onSortChange}
        />

        {currentProducts.map((item, index) => (
          <TableItem
            item={item}
            key={`table-item-${index}`}
            actions={actions(item.name.name, item.id.id || '')}
          />
        ))}
      </div>
      {items.length > productPerPage && (
        <PaginationBox
          changePageHandler={page => setCurrentPage(page)}
          count={Math.ceil(items.length / productPerPage)}
          setSelectedOption={val => {
            if (typeof val[0]?.text === 'string') {
              const selectedNumber = val[0].text.match(/\d+/);

              setProductsPerPage(Number(selectedNumber));
            }
          }}
        />
      )}
    </>
  );
};