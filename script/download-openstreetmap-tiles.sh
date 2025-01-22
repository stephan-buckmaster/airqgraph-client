OPENSTREETMAP_URL=https://a.tile.openstreetmap.fr/hot
DEST_DIR=tiles
if [ ! -d "$DEST_DIR" ]; then
  mkdir -p $DEST_DIR
  echo "Created directory $DEST_DIR"
fi

function download() {
  z=$1 
  x=$2 
  y=$3 
  file=$DEST_DIR/os-$z-$x-$y.png 
  echo "Downloading file for z=$z x=$x y=$y to $file from ${OPENSTREETMAP_URL}"
  wget  -O $file ${OPENSTREETMAP_URL}/$z/$x/$y.png
}

for x in $(seq 645 651);
do
    for y in $(seq 1400 1403);
    do
      download 12 $x $y
    done
done
echo "Complete"
