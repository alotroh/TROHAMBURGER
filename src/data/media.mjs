/**
 * КАРТА ФОТО
 * ------------------------------------------------------------------
 * Реальные снимки, нарезанные из media/бургеры.jpg (по одному бургеру),
 * импортированы как ImageMetadata (astro:assets → webp, адаптив).
 * Ключ — slug бургера из src/data/menu.mjs.
 *
 * Как добавить фото ещё куда-то: положите файл в src/assets/media/,
 * импортируйте здесь и подключите в нужном месте страницы.
 */
import trohaDabl from '../assets/media/burgers/troha-dabl.jpg';
import bekonSmesh from '../assets/media/burgers/bekon-smesh.jpg';
import chizAtaka from '../assets/media/burgers/chiz-ataka.jpg';
import ogonek from '../assets/media/burgers/ogonek.jpg';
import gribnoyDzhem from '../assets/media/burgers/gribnoy-dzhem.jpg';
import hrustik from '../assets/media/burgers/hrustik.jpg';
import zelyony from '../assets/media/burgers/zelyony.jpg';
import smokiBibiko from '../assets/media/burgers/smoki-bibiko.jpg';

/** slug → фото бургера. */
export const BURGER_PHOTOS = {
  'troha-dabl': trohaDabl,
  'bekon-smesh': bekonSmesh,
  'chiz-ataka': chizAtaka,
  'ogonek': ogonek,
  'gribnoy-dzhem': gribnoyDzhem,
  'hrustik': hrustik,
  'zelyony': zelyony,
  'smoki-bibiko': smokiBibiko,
};

// Еда (лист 1)
import foodBurgerCut from '../assets/media/food/burger-cut.jpg';
import foodFriesSauces from '../assets/media/food/fries-sauces.jpg';
import foodSaucesRow from '../assets/media/food/sauces-row.jpg';
import foodDrinks from '../assets/media/food/drinks.jpg';
import foodSidesBaskets from '../assets/media/food/sides-baskets.jpg';
import foodFriesSteam from '../assets/media/food/fries-steam.jpg';
// Кухня (лист 2)
import kitchenPress from '../assets/media/kitchen/press.jpg';
import kitchenGrill from '../assets/media/kitchen/grill.jpg';
import kitchenAssembly from '../assets/media/kitchen/assembly.jpg';
import kitchenSaucePour from '../assets/media/kitchen/sauce-pour.jpg';
import kitchenChef from '../assets/media/kitchen/chef.jpg';
import kitchenTeam from '../assets/media/kitchen/team.jpg';
// Заведение (лист 3)
import placeHall from '../assets/media/place/hall.jpg';
import placeBar from '../assets/media/place/bar.jpg';
import placeFacade from '../assets/media/place/facade.jpg';
import placeCorner from '../assets/media/place/corner.jpg';

export const PHOTO = {
  burgerCut: foodBurgerCut,
  friesSauces: foodFriesSauces,
  saucesRow: foodSaucesRow,
  drinks: foodDrinks,
  sidesBaskets: foodSidesBaskets,
  friesSteam: foodFriesSteam,
  press: kitchenPress,
  grill: kitchenGrill,
  assembly: kitchenAssembly,
  saucePour: kitchenSaucePour,
  chef: kitchenChef,
  team: kitchenTeam,
  hall: placeHall,
  bar: placeBar,
  facade: placeFacade,
  corner: placeCorner,
};
