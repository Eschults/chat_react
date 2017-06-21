class MessagesController < ApplicationController
  def index
    @messages = Message.all
    respond_to do  |format|
      format.html
      format.json
    end
  end

  def create
  end
end
