class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create

  def index
    @messages = Message.all
    respond_to do  |format|
      format.html
      format.json
    end
  end

  def create
    @message = Message.create!(user: current_user, content: params[:content])
    ActionCable.server.broadcast("messages", { event: "New message" })
    head :no_content
  end
end
