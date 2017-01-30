require 'rails_helper'

describe User, type: :model do
  it { should have_valid(:username).when('maximumdad', 'anotherguy') }
  it { should_not have_valid(:username).when(nil, '') }

  it { should have_valid(:email).when('user@example.com', 'another@gmail.com') }
  it { should_not have_valid(:email).when(nil, '', 'user', 'user@com', '.com', 'check@gmail') }

  it 'has a matching password confirmation for the password' do
    user = User.new
    user.password = 'password'
    user.password_confirmation = 'notpassword'

    expect(user).to_not be_valid
    expect(user.errors[:password_confirmation]).to_not be_blank
  end
end
