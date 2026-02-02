import FeaturedRole from './FeaturedRole';
import SecondaryRoles from './SecondaryRoles';

export default function BoardInfo() {
  return (
    <main className="bg-white relative">
      <FeaturedRole
        title="President"
        name="Sayuru Bopitiya"
        image="/board/sayuru.png"
      />

      <FeaturedRole
        title="Vice President"
        name="Irushi Gunawardene"
        image="/board/irushi.png"
        reverse
      />

      <SecondaryRoles />
    </main>
  );
}
