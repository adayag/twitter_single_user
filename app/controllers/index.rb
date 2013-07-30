get '/' do
  if request.xhr?
    erb :_tweets, :layout => false
  else
    erb :index
  end
end

post '/' do
  flash[:success] = nil
  current_tweet = tweet!(params[:text])
  flash[:success] = current_tweet.text 
  redirect to('/')
end

# get '/:username' do
#   @user= User.find_or_create_by_username(params[:username])
#   p "here are the tweets #{@user.tweets}"
#   if @user.tweets.empty? || @user.tweets_stale?
#      @user.fetch_tweets!
#   end
#   @tweets = @user.tweets.limit(10)
#   if request.xhr?
#     erb :_tweets, :layout => false
#   else
#     erb :index
#   end
# end
