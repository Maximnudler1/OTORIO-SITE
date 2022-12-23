FROM cypress/base:18.12.1

# make new dir
RUN mkdir /app
#set up /app as working dir
WORKDIR /app

# copy all file to docker image dir(app)
# sorce>destantion 
COPY . /app

RUN npm install --save-dev cypress

RUN $(npm bin)/cypress verify

RUN ["npm","run","recordDashboard"]