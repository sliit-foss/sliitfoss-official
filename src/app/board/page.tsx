import BoardHeader from '@/components/board/BoardHeader';
import CommitteeMembers from '@/components/board/CommitteeMembers';
import BoardInfo from '@/components/board/BoardInfo';

export default function Board() {
  return (
    <main className="bg-white relative pt-30">
      <BoardHeader />
      <BoardInfo />
      <CommitteeMembers />
    </main>
  );
}
