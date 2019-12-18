docker build --rm -f Dockerfile -t expenses-calculator:latest .

docker run --rm -p 80:80 expenses-calculator:latest
