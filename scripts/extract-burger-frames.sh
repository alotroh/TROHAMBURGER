#!/usr/bin/env bash
# Нарезает фон-анимацию бургера из исходного видео в кадры WebP.
# Берём ТОЛЬКО отрезок «целый бургер → полностью разобран» (кадры 0..PEAK),
# без обратной сборки, с шагом STEP (прореживание для меньшего веса).
# Результат: public/burger-frames/{lg,sm}/NNN.webp (000 = статичный постер).
#
# Запуск:  bash scripts/extract-burger-frames.sh /путь/к/video.mp4
set -euo pipefail

SRC="${1:?Укажи путь к исходному видео}"
PEAK=160          # кадр максимальной разборки (дальше видео собирает обратно)
STEP=2            # брать каждый 2-й кадр 24fps-исходника → ~плавно и легко
OUT="public/burger-frames"

rm -rf "$OUT"
mkdir -p "$OUT/lg" "$OUT/sm"

SEL="select=between(n\,0\,$PEAK)*not(mod(n\,$STEP))"

echo "lg (1280w)…"
ffmpeg -y -loglevel error -i "$SRC" \
  -vf "$SEL,scale=1280:-2" -fps_mode passthrough \
  -c:v libwebp -quality 74 -compression_level 6 \
  -start_number 0 "$OUT/lg/%03d.webp"

echo "sm (854w)…"
ffmpeg -y -loglevel error -i "$SRC" \
  -vf "$SEL,scale=854:-2" -fps_mode passthrough \
  -c:v libwebp -quality 72 -compression_level 6 \
  -start_number 0 "$OUT/sm/%03d.webp"

echo "Готово: $(ls "$OUT/lg" | wc -l) кадров."
