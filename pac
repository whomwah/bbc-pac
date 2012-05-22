#!/usr/bin/ruby

require 'optparse'

optparse = OptionParser.new do |opts|
  opts.banner = "Usage: pac PROFILE (e.g) bbc"

  opts.on_tail("-h", "--help", "Show this message") do
    puts opts
    exit
  end
end

optparse.parse!

unless ARGV.first
  puts optparse
  exit
end

profile = ARGV.first.downcase

case profile
when "bbc"
  url = "http://autoproxy.reith.bbc.co.uk/autoproxy/bbc.pac"
when "rd"
  url = "http://www.rd.bbc.co.uk/kwonly/bbcrd.pac"
else
  "I don't understand #{profile}"
  exit
end

system "echo #{url} | pbcopy"
puts url
