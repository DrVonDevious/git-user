
import tkinter as tk
import tkinter.scrolledtext

root = tk.Tk()

def init_gui(master):
    master.title('Arda')
    tk.scrolledtext.ScrolledText(width=40, height=20)
    


def main():
    print('running...')

    init_gui(root)

    root.mainloop()

if __name__ == '__main__':
    main()
