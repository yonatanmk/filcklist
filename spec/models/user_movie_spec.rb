require 'rails_helper'

describe UserMovie, type: :model do

  it { should have_valid(:user_id).when(1, 456) }

  it { should have_valid(:movie_id).when(45, 1294) }

  it { should have_valid(:status).when('want', 'like') }

end
