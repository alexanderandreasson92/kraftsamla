FROM cypress/base

ADD . /usr/src/kraftsamla_autotest
WORKDIR /usr/src/kraftsamla_autotest

RUN npm install
