FROM cypress/factory

ADD . /usr/src/kraftsamla
WORKDIR /usr/src/kraftsamla

RUN npm install
