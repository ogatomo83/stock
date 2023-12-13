From ruby:latest

RUN apt-get update -qq && apt-get install -y nodejs npm default-mysql-client
RUN npm install -g yarn

RUN mkdir /stock-rails
WORKDIR /stock-rails

# COPY ./api/Gemfile /stock-rails/Gemfile
# COPY ./api/Gemfile.lock /stock-rails/Gemfile.lock
COPY ./api /stock-rails

RUN bundle install

EXPOSE 3000