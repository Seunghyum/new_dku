CarrierWave.configure do |config|
  config.fog_credentials = {
    :provider               => 'AWS',                                       # required
    :aws_access_key_id      => 'yy',                      # required
    :aws_secret_access_key  => 'xx',  # required
    :region                 => 'ap-northeast-2',                            # optional, defaults to 'us-east-1'
    :endpoint               => "https://s3.ap-northeast-2.amazonaws.com"
  }
  config.fog_directory  = 'dku'
end
