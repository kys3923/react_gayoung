const board = [
  {
    name: 'list 1',
    author: 'gayoung',
    href: 'list/1'
  },
  {
    name: 'list 2',
    author: 'hagayoung',
    href: 'list/2'
  },
]

const List = (props) => {
  return (
    <div>
      <ul>
        {
          board.map((list) => {
            return <li><a href={list.href}>{list.name}</a></li>
          })
        }
      </ul>
    </div>
  );
}
export default List;