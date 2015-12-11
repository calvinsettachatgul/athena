class Person
  attr_reader :firstname
  attr_writer :lastname
  def initialize(firstname, lastname)
    @firstname = firstname
    @lastname = lastname
  end

  def introduce

    puts "Hello my name is #{@firstname} #{@lastname}"

  end


  end #end of person class

git filter-branch --env-filter '
OLD_EMAIL="calivn.settachatgul@gmail.com"
CORRECT_NAME="Calvin Settachatgul"
CORRECT_EMAIL="calvin.settachatgul@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags