function addInput() {
    var input = document.createElement("input");
    input.type = "text";
    input.className = "block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input";
    input.placeholder= ('Kalit so\'z')
    input.name = 'keywords'
    input.required

    var container = document.getElementById("inputContainerKeywords");
    container.appendChild(input);
}

function openModal() {
    var modal = document.getElementById("myModal");
    modal.classList.remove("hidden");
    var modalInputs = document.getElementById("modalInputs");
    modalInputs.innerHTML = '';
    var placeholders = ["Muallif to'liq ismi", "Muallif ishlash yoki o'qish joyi", "Muallif ilmiy darajasi"];
    for (var i = 0; i < 3; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.required
        input.className = "form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-400 focus:ring focus:ring-purple-400 focus:ring-opacity-50";
        input.placeholder = placeholders[i];
        modalInputs.appendChild(input);
    }
}

function closeModal() {

    var modal = document.getElementById("myModal");
    modal.classList.add("hidden");
}

function saveData() {

    var modalInputs = document.getElementById("modalInputs").getElementsByTagName("input");
    var inputData = [];
    for (var i = 0; i < modalInputs.length; i++) {
        inputData.push(modalInputs[i].value);
    }

    var inputContainer = document.getElementById("inputContainer");
    var card = document.createElement("div");
    card.className = "p-4 mb-8 text-lg font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"; for (var i = 0; i < inputData.length; i++) {
        var span = document.createElement("span");
        span.textContent = inputData[i];
        card.appendChild(span);
        card.appendChild(document.createElement("br"));

        var input = document.createElement("input");
        input.value = inputData[i];
        input.type = 'hidden';
        input.name = 'authors'
        card.appendChild(input);
    }

    inputContainer.appendChild(card);

    closeModal();
}



    function fetchDocumentInfo(url) {
        // Assuming this is a placeholder function for fetching document information
        return fetch(`/api/documentInfo?url=${encodeURIComponent(url)}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch document information');
                }
                return response.json();
            });
    }

    const dropzone = document.getElementById('dropzone-file');
    const textarea = document.getElementById('default');
    const open = document.getElementById('open');
    dropzone.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    fetchDocumentInfo('https://sirdaryotexnopark.uz/sciense/uploads/example.docx')
                        .then(docInfo => {
                            mammoth.convertToHtml({ arrayBuffer: e.target.result })
                                .then(result => {
                                    displayResult(result, docInfo);
                                })
                                .catch(error => console.error(error));
                        })
                        .catch(error => console.error(error));
                };
                reader.readAsArrayBuffer(file);
            } else {
                textarea.value = `Preview not available for ${file.name}`;
            }
        }
    });

    function displayResult(result, docInfo) {
        open.style.display = 'block'
        const convertedHtml = result.value;
        const originalDocument =  docInfo.name;

        // Set the content of TinyMCE editor with the original document info and converted HTML content
        tinymce.get('default').setContent(`${originalDocument}\n\n${convertedHtml}`);
    }
