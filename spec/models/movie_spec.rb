require 'rails_helper'

describe Movie, type: :model do
  it { should have_valid(:title).when('Street Sharks') }
  it { should_not have_valid(:title).when(nil,'') }

  it { should have_valid(:poster_path).when('/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg') }

  it { should have_valid(:release_date).when('01/01/2017') }

  it { should have_valid(:overview).when('this is an oveview') }

  it { should have_valid(:adult).when(true) }

  it { should have_valid(:status).when('want') }
end
