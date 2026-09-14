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
