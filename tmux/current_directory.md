# window creation split pane horizontally and vertically from current pane working direcory

# add this to ~/.tmux.conf

bind-key % split-window -h -c "#{pane_current_path}"
bind-key '"' split-window -v -c "#{pane_current_path}"
bind-key '"' split-window -v -c "#{pane_current_path}"

# source the tmux.conf file
# from command prompt in a tmux session 
:source-file ~/.tmux.conf

# from the terminal
tmux source-file ~/.tmux.conf

